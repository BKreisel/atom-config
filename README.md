#atom-config [![Build Status](https://travis-ci.org/BKreisel/atom-config.svg)](https://travis-ci.org/BKreisel/atom-config)

Configuration Tool for sharing configurations across multiple installations of Github's Atom Text Editor

##Roadmap / TODO

* Add loading and saving of Atom Settings
* ???? .... PROFIT!

##Requirements
* Github's [Atom Text Editor](https://atom.io/).
* apm in the current user's path.
  * Open Atom and run `Atom > Install Shell Commands` from the menu
* NodeJS
* npm

##Installation
Run `npm install -g atom-config`

##Usage

###Commands
* `save [filename]` - saves current Atom packages into a configuration file

* `load [filename]` - loads and installs packages from a configuration file

* `list` - lists currently installed packages

* `clean` - uninstalls all user packages from Atom


###Examples

* `atom-config save atom.conf` - Saves current atom package configuration to atom.conf

* `atom-config load atom.conf` - Installs all packages in atom.conf configuration file

##Contributing

Please list all issues and feature requests [here](https://github.com/BKreisel/atom-config/issues).
