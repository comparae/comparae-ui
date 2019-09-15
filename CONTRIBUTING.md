# Contributing to Comparaê UI

Loving Comparaê UI and want to get involved? Thanks! There are plenty of ways
you can help.

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of
the developers managing and developing this open source project. In return,
they should reciprocate that respect in addressing your issue or assessing
patches and features.

## Submitting a Pull Request

Good pull requests, such as patches, improvements, and new features, are a
fantastic help. They should remain focused in scope and avoid containing
unrelated commits.

Please **ask first** if somebody else is already working on this or the core
developers think your feature is in-scope for Comparaê UI. Generally always
have a related issue with discussions for whatever you are including.

Please also provide a **test plan**, i.e. specify how you verified that your
addition works.

## Folder Structure of Comparaê UI

Comparaê UI was bootstrapped with [TSDX](https://github.com/palmerhq/tsdx).

### Overview of directory structure

```
src/
  ComponentName/
    ComponentName.test.js  // All the tests for the component
    ComponentName.js       // All the code for the component
    index.js               // Re-export the component
    README.md              // The documentation for how to use this component
```

## Setting Up a Local Copy

1. Clone the repo with `git clone https://github.com/comparae/comparae-ui.git`

2. Run `yarn` in the root `comparae-ui` folder.

Once it is done, you can modify any file locally and run `yarn start`,
`yarn test` or `yarn build`.

## CI testing

When you submit a PR you the tests will be runned on Travis CI. Only PRs with
all tests passing will be merged.

## Tips for contributors using Windows

The scripts in tasks folder and other scripts in `package.json` will not work
in Windows out of the box. However, using [Bash on windows](https://msdn.microsoft.com/en-us/commandline/wsl/about)
makes it easier to use those scripts without any workarounds. The steps to do so are detailed below:

### Install Bash on Ubuntu on Windows

A good step by step guide can be found [here](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10)

### Install Node.js and yarn

Even if you have node and yarn installed on your windows, it would not be
accessible from the bash shell. You would have to install it again. Installing
via [`nvm`](https://github.com/creationix/nvm#install-script) is recommended.

### Line endings

By default git would use `CRLF` line endings which would cause the scripts to
fail. You can change it for this repo only by setting `autocrlf` to false by
running `git config core.autocrlf false`. You can also enable it for all your
repos by using the `--global` flag if you wish to do so.
