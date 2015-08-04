# Flicker Feed with React


## Setup

Install Ruby and [SASS][sass]:

    $ brew install ruby
    $ gem install sass

Install [Gulp][gulp]:

    $ npm install -g gulp

Install local development and production packages:

    $ npm install


## Building

To build the single-page app first install the Bower's packages and then
run the default Gulp task:

    $ gulp bower
    $ gulp

it will build the JavaScript, CSS and copy the static files in the `build`
directory.


## Serve static files locally

Optionally you can serve static files from a locally with
[http-static][http-static]:

    $ npm install -g http-server
    $ cd build
    $ http-static

and now you can access the app at `http://localhost:3333`.


[sass]: http://sass-lang.com/
[http-static]: https://www.npmjs.com/package/http-static
[gulp]: http://gulpjs.com/
