#atom-config [![Build Status](https://travis-ci.org/BKreisel/atom-config.svg)](https://travis-ci.org/BKreisel/atom-config)

Configuration Tool for sharing configurations across multiple installations of Github's Atom Text Editor
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
###Exporting current configuration
    atom-config save [filename]

###Importing a configuration file   
    atom-config load [filename]

###List currently-installed Atom packages
    atom-config list

##Contributing

Please list all issues and feature requests [here](https://github.com/BKreisel/atom-config/issues).
