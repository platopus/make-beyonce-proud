# make-beyonce-proud
Exercises to help the big stemettes with HTML

##Setting up

###Git & Github

**Git** is a version control system that tracks the changes you make to your files and allows you to "commit" these changes to your project, or repository. 

In short it is like pressing save across multiple files, being able to write a note about what you saved and being able to undo at any point in time while your friend is doing the same thing to the same files

Git is your friend when it comes to keeping track of the changes you have made, but it can also hurt you very badly. It is possible to delete two days work by being a bit YOLO with
all the options (I have done this before), so we will be using github for windows. It simplifies the process, as we are learning node and not git. Please download it (here)[https://windows.github.com/]
and get it all set up and signed in. Extra credit for setting up two step authentication.

Mac users, hopefully I will find out what is the equivalent for you guys beforehand. 

**Github** is a website that allows you to keep the work from your repositories online and share your code with your friends. You will need to sign up for an account. 

I am sharing this repository, or repo as the cool kids call it, with you.

However, you will all be making changes at the same time to the same files. Git has a system of "merging" these changes, but when you do this it will only keep one copy. We all want
our own copies therefore you will need to "fork" this repository via the github website.

Once you have done this you will have a repo of your own! Check back to github for windows and "sync" this project to your computer.

###node.js

node.js (with a lower case n) is a hipster language that is gaining popularity. It is being taken more seriously as it improves and the hipsters get better jobs.

I have chosen it because it will help familiarise you with javascript and it can be used with "handlebars" to template HTML files (we will get to that later).

If you look at a few examples, you might notice it looks a little like javascript.

It is - however, the difference between the javascript we write with the kids and this is that node is "server-side" javascript. This will become clearer over the course of our workshop, but in short it means that it is not run in your
browser when you load a page, it is used to create the page instead. 

You will need to install node. Go [here](https://nodejs.org/download/) and use the appropriate installer. Just keep clicking next through the instructions - make sure you copy the install directory (Ctrl-c the file path) and just pop it in a notepad file for now. We will use it later. 

To check it has worked, open up a command prompt and type node. If you are using windows 8, search for "cmd". Mac users this is a terminal window.

If the symbol ">" does not appear (it probably won't if you are using windows) then you need to add node to your "PATH". The error message "node is not recognized as an internal or external command, operable program or batch file" is just a fancy way of saying "I do not know this node you speak of".

The PATH is like the contacts list equivalent when you want to run programs, i.e. when you type node, windows goes away and looks at the file paths it has in the PATH and looks for their number - do I have their number? 

You need to tell it yes, you do have nodes number and you want to put it on speed dial please - so that when you type node, it knows whats up.

(This)[http://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/] tutorial will show you how in Windows. The install directory you copied to notepad should be used here. The FYI, it's ok to be excited by "advanced system settings". 

Mac users it should have just worked right? 

Hopefully now you can type node into the command line and see the ">" symbol. If you can, you are now running interactive node. Try typing in javascript, or anything really, and see what happens. console.log("your text here"); is a good place to start.

##Digital Dinner Menus

Scenario: You love cooking for your friends. They all get ecited when you send them calendar/facebook/plain old email invite to them - but their enthusiasm for your
mouth watering dishes is becoming somewhat irritating. As the RSVPs come flooding in with one question - what is on the menu?

Solution: We are going to create a simple node app that will easily let you create a digital menu that you can include in your invite.

It will consist of one static page we will be generating from a JSON file using node. 

###What we will be doing

1. NPM install. What did it do? 
2. package file
3. A little look at the code - can you spot where EA was super lazy? 
4. A little look at handlebars template
5. A quick word about json (and xml). Which do you prefer? Why might we use formats like this? Why do people favour JSON?
5. Run script to create most basic html page - does it work? Can you fix it?
5. Can you centre align the title (h1 tag)?
6. Can you centre align everything?
6. A little look at <div> and w3 schools. Can we use these to centre align everything?
7. If you were going to include a border, how would you do it? Give it a go.
7. A look at types of design (responsive vs. adaptive). What does it look like on a mobile?
8. Seeing what the page looks like with different css files. Look at resources to create css.
9. Quick word about fonts. 
10. Modifying the handlebars and node to include starters


Extensions/Homework:

Perfect your page design using CSS. Do you need to change the underlying html?

Can you take it to the next level of fancy and modify the code and your handlebars templates to allow you to add aperitifs, fish courses and after dinner coffee?

Let's take our dinner party lead from our Spanish friends and serve tapas - can you add the functionality to create a tapas menu without breaking your existing code?

Developers hate repeating themselves and they are also quite lazy - after all if you make a change to duplicated code, you have to change it multiple times which is just an exercise in copy/paste. You might also make mistakes.
Can you modify this code to be more generic? Can you make it work with your design and not break things. This exercise will be taking you to the next level. Try looking online for resources about "repetition code smells".

What about a different layout for different occasions (Birthday parties, Eurovision, funerals etc) - i.e. using the same handlebars/html but applying different css files to it? 

Mega Challenge: You get a round of drinks or cake (depending on your preference) if you can modify this app to allow your guests to vote on the dress code. 
The acceptance criteria for this offer is that you must be able to vote on the page from a list of choices in radio button format and receive the information as a private notification of some kind excluding email. The page itself must not be password protected. 
You will be sending the link in a private communication. Consider what data you do and don't want to share, as theoretically anyone can see the html generated if you host it online.
Do you need a server running? How many people will see this?
Be creative. Think twilio, yo, twitter, evernote - who has an API you can use?. 
You can work on this as a team. Pick one persons repo to modify and each clone it. Remember communication is key when working on the same repo and always pull first. 

Please note: These offers are only valid for people attending the workshop with me IRL. Otherwise, send me a tweet and you can have some emojis if you complete these challenges. :D


Could be modified to: Make a weekly menu page for outbox incubator.

Do people really do this? Yes. At work we created a node app that takes a file similar to JSON and creates a static page of developer documentation for our API. It uses exactly the same technologies as you have
used in this exercise. It then takes the generated HTML and puts it in the cloud, in this case Amazon Web Services (AWS). 

Check the script to generate the html here here https://github.com/emashliles/raml2html







  
