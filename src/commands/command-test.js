const { window } = require('vscode');

const JestRunner = require('../jest-runner');
const StatusIndicator = require('../status-indicator');

module.exports = (args) => {
  if (!args) {
    args = window.activeTextEditor.document.fileName;
  }

  StatusIndicator.running();

  JestRunner.run(args, true)
    .then(() => StatusIndicator.update());
}