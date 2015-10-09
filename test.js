import childProcess from 'child_process';
import test from 'ava';
import chalk from 'chalk';

const output = `
markdown-cli

dsdasddsd
ad

    Output markdown to CLI



    $ markdown-cli <file>
    $ echo <string> | markdown-cli

😂

`;

test('main', t => {
	t.plan(2);

	childProcess.execFile('./cli.js', ['fixture.md'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.is(chalk.stripColor(stdout), output);
	});
});

test('stdin', t => {
	t.plan(2);

	childProcess.exec('cat fixture.md | ./cli.js', {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.is(chalk.stripColor(stdout), output);
	});
});
