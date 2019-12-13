---
title: Hide your Dock without Losing your Mind
date: 2015-07-14
published: true
---

![](./desktop.jpeg)

Yesterday I decided to clean up all the files that were piling up on my desktop, I changed my wallpaper and tried hiding my dock to see how I would like it.

Having the extra space is nice when working from my laptop, but what appealed to me even more was the fact that I could focus on what I was working on *right now* instead of everything else I *could* be doing. No Slack or Mail notification badge in sight.

Every time I had tried that in the past I ended up turning it back off but I couldn't put my finger on why. My friend [Wayne Spiegel nailed it](https://twitter.com/waynespiegel/status/620953934711029760): the delay before the dock comes up is painfully long and the animation is super slow. Painfully slow.

Apparently you can change the delay and animation duration. Here's how to do it:

```
defaults write com.apple.dock autohide-delay -float 0;
defaults write com.apple.dock autohide-time-modifier -float 0.5;
killall Dock
```
