# DBL Webhook || Top.gg Webhook
In this repository, you will see how to make a basic webhook. A webhook in web development is a method of augmenting or altering the behavior of a web page or web application with custom callbacks. These callbacks may be maintained, modified, and managed by third-party users and developers who may not necessarily be affiliated with the originating website or application. [Wikipedia](https://en.wikipedia.org/wiki/Webhook).

## Working
When a Discord User votes your bot/server on [Top.gg](https://top.gg), it sends a HTTP responce to the given webhook address. We are not able to use Discord's Channel Webhooks, as they do not accept HTTP reponces. But we have made a solution, this snippet will parse the HTTP responce and will send the responce to a discord channel via Discord Webhook.

## Guide
### #Requirements:
- Have a 24/7 Host. e.g. [Alaister.net](https://alaister.net/)
- Git Software [Download Link](https://git-scm.com/downloads)
- Knowledge of Ports
- Basic Knowlegde of Webhooks
- Basic Knowledge of Node.js and Node Package Manager(npm)

### 1. Get the Code
You can get code by any of the one method listed below:

By Git
```
git clone https://github.com/Elitex07/dblwebhook Folder_Name
```
By SSH
```
git@github.com:Elitex07/dblwebhook.git
```
By Github CLI
```
gh repo clone Elitex07/dblwebhook
```

### 2. Fill the entried in index file.
Some entries to be filled in index.js:
- Webhook-Auth on Line 6: Authorization Text in Webhook section on Top.gg (Descided by User on Top.gg)
<blockquote class="imgur-embed-pub" lang="en" data-id="flD6Duq"><a href="https://imgur.com/flD6Duq">View post on imgur.com</a></blockquote>
- Discord Webook URl on Line 12: Add a Discord Webhook URL - to create one, to Channel Settings -- Integration -- Create Webhook
- Port on linw 22: Enter the port of your console of the Host. If hosted by sources like VPS or Windows Terminal: Enter a Random Number [remmeber this number, we would require in furthur steps]
<blockquote class="imgur-embed-pub" lang="en" data-id="gy8NgW6"><a href="https://imgur.com/gy8NgW6">View post on imgur.com</a></blockquote>
- Save the File

### 3. Let's Start
- Open Terminal or something where you can type in commands.
- Install required packages by
  ```
  npm install
  ```
- Run the Main File by
  ```
  node index.js
  ```
### 4. Final Step
- Get the console URL and port
- Head to Webhook section in Top.gg
- Paste the console link
- Add Port and /vote to the end. i.e. if my console url is `sftp://abc.net` then make it `sftp://abc.net:port/vote`
- Save the Stuff and Run a Test

## Support
Join one of these Discord Servers, to get support:
- [Raiden Community](https://discord.gg/2SEEZ86pyj)
- [FlameQuard](https://discord.gg/TvjrWtEuyP)
