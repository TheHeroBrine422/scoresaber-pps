# scoresaber-pps

An attempt by Hero to convert osu-pps to work with scoresaber.

This project is still very WIP and in the early stages.

I am going to warn anyone who wants to read this code or even try to contribute, grumd said that this code was messy when he finished it. I have turned it from a mess to a full on pile of spaghetti. Please do not take this as my best work because it isn't. The intent for this project was to get it working as fast as possible with the base functionality I wanted. Not to write good or clean code.

# Original Readme:

A [website made by grumd](http://grumd.github.io/osu-pps) with a list of most farmy maps in osu.  
Supports osu!standard, taiko, mania, fruits.

# Setup

You should have nodejs and npm installed first. I'm using node v8.9.  
For initial setup, `npm i` in the root directory and in `/react-app` if you want to run front-end.  
To run update scripts, you also need to create a `/update-scripts/config.json` file that looks like this:

```json
{
  "apikey": "<your-osu-api-key>"
}
```

### Front-end
Open `/react-app` and run `npm start`.

For debugging, you can change `DEBUG_FETCH` variable in `/react-app/src/constants/common.js` - front-end will search for json data files in `/react-app/public` instead of fething from github.

### Back-end (database update scripts)
Open `/update-scripts` and run `node scheduler.js`.

For debugging, you can change `DEBUG` variable in `/update-scripts/constants.js` - limits update process to just a few users/maps for debugging and testing purposes.

# Contributing

I didn't intend for this repository to have contributions, it's mostly here for my own convenience. The code is pretty messy and hard to understand.

But if you still want to contribute, you can create a merge request based on `develop` branch.
`master` branch shouldn't be touched, it's used for data updates and is force-pushed regularly.

# License

I'm using an MIT license, see [`LICENSE`](https://github.com/grumd/osu-pps/blob/develop/LICENSE).
