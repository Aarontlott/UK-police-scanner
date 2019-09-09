# UK Police event database

The UK Police event app works with the [data.police.uk](https://data.police.uk/) open API to allow users to search and view events in various neighbourhoods across England, Wales and Northern Ireland.

The app is build with [Ember.js](https://emberjs.com/), and you can see below the requirements for running the application locally.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd police-scanner`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).


## Testing

Ember tests may be run with these commands:

* `ember test`
* `ember test --server`

### Testing methodology

Besides the built-in Ember testing the testing methods to be utilized before deploying to production are as follows:

1. QA testing by the development team
2. Run a Cypress visual regression test to ensure new functionality doesn't break the app
3. User testing by an unrelated individual, ideally an end user of the application
4. Any necessary fixes are carried out by development team
5. Product Owner (or individual appointed by the P.O.) to sign off
6. Deploy the code

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Deploying

Once the testing is complete and any fixes are implemented, build and launch to your appropriate server.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
