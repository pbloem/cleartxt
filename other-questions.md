# Other questions

Here are some other questions that people have asked.

## Are there any other security issues like these I should watch out for?

Yes, many. 

As noted above, the main way to avoid security holes is to use standard solutions rather than your own implementations and to use them as they're designed to be used. However, it's good to be at least aware of the main pitfalls. Some common ones are:
* **[SQL injection](https://www.csoonline.com/article/3257429/application-security/what-is-sql-injection-this-oldie-but-goodie-can-make-your-web-applications-hurt.html)** This happens when a user can manipulate website forms to change the database queries. Most platforms take of  the construction of databse queries, so if you use them correctly, this won't happen. However, if you build database queries yourself you should be very careful about this.
* **[Cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)** There are many ways an attacker can sneak javascript onto your website, to manipulate it (for instance sending user information back to the attacker). 
* **[Direct object references](https://www.hackingarticles.in/beginner-guide-insecure-direct-object-references/)** This happens when you pass information back to a server to the URL or POST parameters. Anybody can manipulate this information. If a website gives me acces to my data with the url ```site.com/user_data&id=00223```, I can't help but try the url  ```site.com/user_data&id=00222``` as well, to see if the website will give me access to somebody else's data. 

## You say we should switch to a well-maintained platform, but that would mean rewriting our whole codebase. We don't have the resources.

This can be difficult. The important thing is to fix the worst security problems in your 
current codebase by implementing salting and hashing. Switching to a professional platform
is a long-term solution that you can take some time for.

However, there's a difference between a concrete plan for change and good intentions. If you 
just have some vague resolution that you will someday change the platform behind your website, it 
will never happen.

The solution is to develop your codebase at different levels. At one level you fix crucial 
bugs like things that compromise security and important functionality. At another, you plan
 for the future, implementing features you would like to have and big changes like using a 
 platform.

This has several benefits. Firstly, your developers can still spend most of their time 
fixing critical bugs, but you can manage how much time they spend on implementing future 
functionality. 

Secondly, **it makes your developers much happier**. Nobody likes to spend 
their life patching the leaks in a product that they know is poorly constructed. If you spend 
half your time fixing the current product and the other half fixing the big problems that 
you know are there, you get a lot more job satisfaction. It's not easy keeping good developers
on board, so you should find a way to let them create the quality product they want to create.

