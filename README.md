A simple initial configuration for Planet Birmingham, using Planet Venus as the provider.

Instructions
============

Initial setup:

1. mkdir planetbirmingham
2. cd planetbirmingham
3. git clone https://github.com/rubys/venus.git
4. git clone https://github.com/stuartlangridge/planetbirmingham

Possible extra stuff

1. sudo apt-get install xsltproc

Building the pages

1. cd planetbirmingham
2. python ../venus/planet.py birminghamio.ini
3. firefox html/index.html

(Once happy that this works, stick "`cd /path/to/planetbirmingham/planetbirmingham && python ../venus/planet.py birminghamio.ini`" in cron hourly or something.)

Adding new blogs is a question of editing planetbirmingham/planetbirmingham/birminghamio.ini and adding a new section which looks like

    [http://url/for/website/feed]
    name = Site Owner's Name

Note that you can't put the URL of the website *itself* in; it has to be the URL for the feed. You can inspect the site for the feed URL, or use https://pypi.python.org/pypi/feedfinder or similar tools.

Edit planetbirmingham/planetbirmingham/templates/birminghamio/index.html.tmpl to change the look of the site. Note that while changing the templates, you can run `python ../venus/planet.py -o birminghamio.ini` (note the `-o`) which will regenerate the site from the cache without hitting the network, which is a lot faster.
