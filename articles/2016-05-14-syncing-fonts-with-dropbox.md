---
title: "Syncing Fonts With Dropbox"
date: "2016-05-14"
published: true
---

I recently had a few problems with my computer and had to move to a new Mac. I thought this would be the perfect way for me to see how quick I could get my new machine up and running. As I always say, I don't believe in backups. All of my stuff is either in Dropbox, iCloud or Github so I should be able to re-download everything pretty quickly in case of a problem. I was pretty amazed that I was able to get most of my environment set up in just a few hours.

One thing that I realized was more painful than it should was porting over my fonts from one computer to the other. Yeah, sure most of them were in Dropbox, but some of them weren't. And it felt weird having duplicate copies of these fonts in two places (in `/Library/Fonts` and on Dropbox).

So I decided to create a better workflow that integrates with my dotfiles. If you don't know what dotfiles are, it's a collection of configuration files (which usually start with a ".") that help developers set up their environment really quickly. Anyways, you don't have to worry about that to follow this article, but if you're interested you can [learn more about it here](https://dotfiles.github.io).

Alright, back to what we're interested about. Here's what the plan is:

Have a folder on Dropbox that hosts all of your custom fonts and syncs them across your different computers that also automatically syncs with your font library so that you don't have to keep two copies of your fonts in sync.

I've seen other people symlink their entire `/Library/Fonts` folder, but it didn't seem like a very future-proof solution to me. What happens if you accidentally delete a font used by the system by mistake? Or what if a new version of OS X adds a few new fonts?

My idea was to symlink my `Fonts` folder on Dropbox to another folder inside the fonts folder, so something like `/Library/Fonts/Custom Fonts`. But when I tried it, the fonts wouldn't install themselves. Looks like Font Book doesn't like symlinks. *Oh I guess that's why people symlink their entire font folder.*

I almost gave up until I decided to try one last thing: do the opposite. Put all the "real" files in `/Library/Fonts` and have the alias in Dropbox. That worked! If you're still unsure what a symlink or an alias is, don't worry, you don't have to know how all of this works behind the scenes.

### Step 1 - Fire up Terminal.app and paste this in:
```
mkdir "/Library/Fonts/Custom Fonts/"
```

This will create a folder named `Custom Fonts` in your Fonts folder. This is where your font files will live.

### Step 2 - Symlink your `Custom Fonts` folder to your Dropbox
```
ln -s -f "/Library/Fonts/Custom Fonts" "~/Dropbox/Fonts"
```
This will link the two folders together. So every time you add something in `~/Dropbox/Fonts`, it'll automatically be added to your `/Library/Fonts/Custom Fonts` folder.

### Step 3 - Add all your fonts in the `Fonts` folder of your Dropbox
And you're done! It's simple as that. You can do the same thing with your other computers and everything will magically sync. Just remember to only add fonts by putting them in that folder.
