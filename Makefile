#	Target: install dependencies 
install:
	npm ci

#	Target: run file brain-games.js
brain-games:
	node bin/brain-games.js

#	Target: run file brain-even.js
brain-even:
	node bin/games/brain-even.js

#	Target: run file brain-calc.js
brain-calc:
	node bin/games/brain-calc.js

#	Target: simulation of publishing a progect to npm catalog
publish:
	npm publish --dry-run

#	Target: run eslint in all js files
lint:
	npx eslint .