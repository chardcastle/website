## About 

Source code for my website. Built using  [Next.js](https://nextjs.org/) project bootstrapped with [`react-bootstrap`](https://react-bootstrap.github.io/).

## Usage

Run `yarn dev` and open [http://localhost:3000](http://localhost:3000) with your browser to get cracking.

See Makefile or run `make help` for remaining usage options.

In summary, for demo or quick inspection, run `make dev`. Because this boots in the container, you don't need to care about your host environment. 
Once your done making changes, export the site using `make export-site`.
A copy of the website source files will be in the `./out` folder. Upload the static files to the S3 bucket in AWS which hosts the website.
