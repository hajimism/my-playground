import type { Command, CommandGroup } from "./type";

const setCommandRunner = (
  commands: Command[],
  runCommand: (_command: () => void) => void
): Command[] =>
  commands.map((command) => ({
    ...command,
    action: () => runCommand(command.action),
  }));

// integrate runCommand into each command
export const generateCommandGroups = (
  commangGroups: CommandGroup[],
  runCommand: (_command: () => void) => void
) =>
  commangGroups.map(({ heading, commands }) => ({
    heading,
    commands: setCommandRunner(commands, runCommand),
  }));
