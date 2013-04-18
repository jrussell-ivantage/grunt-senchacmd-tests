This folder is a sencha workspace created with the "sencha generate workspace" command.
It contains a skeleton app created with the command "sencha generate app". Following their
automatic creation, just two modifications were made.

- testworkspace/.sencha/workspace/sencha.cfg
	Added "skip.sass=1" to the bottom of the file.
- testworkspace/testapp/.sencha/app/build-impl.xml
	Set property "build.class.name" to "app-all-sencha-build.js" (default was "all-classes.js")