


all: firefox chrome edge

build: *
	rm -rf dist
	yarn build-prod

firefox: build
	echo "building firefox package"
	FIREFOX_PKG_NAME="firefox-$(shell cat dist/manifest.json| jq -j .version).zip" ; \
	FIREFOX_SRC_NAME="firefox-$(shell cat dist/manifest.json| jq -j .version)-src.zip" ; \
	cd dist; zip -r ../$$FIREFOX_PKG_NAME *; cd ..; \
	zip -r $$FIREFOX_SRC_NAME src/* yarn.lock package.json .env.production webpack.js replace-with-process-env.js; \
	echo "done"

chrome: build
	echo "building chrome package"
	zip -r chrome-$(shell cat dist/manifest.json| jq -j .version).zip ./dist/*

edge: build
	echo "building edge package"
	EDGE_PKG_NAME="omnivore-extension-edge-$(shell cat dist/manifest.json| jq -j .version).zip" ; \
	cd dist; zip -r $${EDGE_PKG_NAME} ./*; cd ..;


