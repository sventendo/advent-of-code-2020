export const Parser = class Parser {
    constructor(lines, debug = false) {
        this.debug = debug;
        this.commands = lines.map(line => {
            const matches = line.match(/^(.{3}) ([+-]\d+)/);
            if (!matches) {
                throw new Error(`Command '${line}' could not be parsed.`);
            }
            return { method: matches[ 1 ], value: parseInt(matches[ 2 ]) };
        });

        this.log(this.commands);
    }

    getLastInputBeforeLoop() {
        this.stack = [];
        this.pointer = 0;
        this.accumulator = 0;

        while (this.stack.includes(this.pointer) === false) {
            this.stack.push(this.pointer);
            this.evalCurrentCommand();
        }

        return this.accumulator;
    }

    evalCurrentCommand() {
        const command = this.commands[ this.pointer ];

        switch (command.method) {
            case 'nop':
                this.pointer++;
                break;
            case 'acc':
                this.accumulator += command.value;
                this.pointer++;
                break;
            case 'jmp':
                this.pointer += command.value;
                break;
        }
    }

    autoFixCode() {
        let fixPointer;

        try {
            this.log('Running the code as is...');
            this.runCode();
            this.log('Nothing to fix.');
            return this.accumulator;
        } catch (e) {
            this.log('Code is broken. Trying to fix...');
        }

        for (fixPointer = 0; fixPointer < this.commands.length; fixPointer++) {
            if (this.lineCouldBeBuggy(fixPointer)) {
                this.log(`Switching commands at pointer ${fixPointer}`);
                this.switchCommands(fixPointer);
            } else {
                this.log(`Command at pointer ${fixPointer} seems save. Continuing...`);
                continue;
            }

            try {
                this.runCode();
                this.log('Code successfully fixed!');
                return;
            } catch (e) {
                this.log(`Tried fixing command at pointer ${fixPointer}, but still resulted in an infinite loop`);
                this.log(`Reverting switching of commands at pointer ${fixPointer}`);
                this.switchCommands(fixPointer);
            }
        }
    }

    lineCouldBeBuggy(pointer) {
        return [ 'nop', 'jmp' ].includes(this.commands[ pointer ].method);
    }

    switchCommands(pointer) {
        if (this.commands[ pointer ].method === 'nop') {
            this.commands[ pointer ].method = 'jmp';
        } else if (this.commands[ pointer ].method === 'jmp') {
            this.commands[ pointer ].method = 'nop';
        }
    }

    runCode() {
        this.stack = [];
        this.pointer = 0;
        this.accumulator = 0;

        while (this.stack.includes(this.pointer) === false) {
            this.stack.push(this.pointer);
            this.evalCurrentCommand();
            if (this.pointer === this.commands.length) {
                this.log('End of code. Exiting.');
                return;
            }
        }

        throw new Error('Infinite loop detected.');
    }

    log(message) {
        if (this.debug) {
            console.log(message);
        }
    }
};
