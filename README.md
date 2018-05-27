<div><a class="action-link" href="#email">Send someone here</a></div>
# Your website or application stores passwords in clear text. This is a serious problem you should fix quickly.

## Why was I sent here?

This link was most likely given to you by a user of your website, who noticed that you sent them an email containing their password. Something like this:

<div class="email-example"><pre>
Dear Jane Doe,

Thank you for registering with Omni Consumer Products. You can now log in with the following credentials:

username: JaneDoe83
password: wRty97/WOrp

You can change your password after logging in.

With kind regards,
The OCP Web Team
</pre></div>

The user is trying to tell you that this is a very serious security problem, and you should fix it.

## What's the problem?

In a secure website, or any other application managing user information, **the operator should not be able to see the user's passwords**. If you can email me my password, that means you can see it. 

You can obscure the passwords by [hashing](https://www.wired.com/2016/06/hacker-lexicon-password-hashing/) them. This encrypts the passwords in your database, but still allows you to check if a user knows their password.

This practice ensures that the password information stays safe, even in the following events:
 * Your site is hacked and your user's information is stolen.
 * An administrator you hired behaves unethically and steals user information.

Secondly, it stops you from sending passwords over email. Note that email is not encrypted by default, and anybody relaying an email between the sender and the receiver can read it.

## My website is not that important. There are no payments and security is not crucial.
That makes your site a prime target for attack. Users reuse passwords. If I get access to your database:

 1. I will get an email and a password for each of your users. 
 2. If any of them uses the same password for their email as for your site, I can access their email.
 3. If I can access their email I can reset the password for any other service they're subscribed to and basically access most of their online services.

The fact that you're not serious about the basics of security means your website is probably
easy to hack, giving attackers a quick and easy place to start gathering user data.

**It's not about your security, it's about the security of your users, beyond your website.**

## Our security is fine. Nobody is going to get access to our database.

Is your security better than that of LinkedIn? Because 
[they were hacked](http://www.bbc.com/news/technology-18338956). So were 
[Adobe](https://www.theverge.com/2013/11/7/5078560/over-150-million-breached-records-from-adobe-hack-surface-online), [eBay](https://www.ebayinc.com/stories/news/ebay-inc-ask-ebay-users-change-passwords/) and 
[Yahoo](https://en.wikipedia.org/wiki/Yahoo!_data_breaches) (twice). Most of these 
companies _did_ encypt their passwords, but if they hadn't, millions of users would have 
had their identities stolen.

If this is the first time you hear about password hashing, you have absolutely no reason to be confident about your security. But even if it is fine, and nobody will ever hack your site, there are many other ways this could go wrong:
 
 * You are (probably) emailing users their password. Emails are not encrypted by default and anybody relaying the email data from you to your sender can read that email.
 * Your system administrator and your developers have access to this data. They could read the emails of any users that reuse their email password for your site. I'm sure they're all very nice and trustworthy people but everybody has their weak moments. The more developers you hire, the more likely your are to trust the wrong person.
 * A careless developer might copy the database to their laptop for testing purposes. 
 * Your backups might be compromised, even if the main site is safe.

# How should I fix this?
The most direct fix is to implement [salting](https://en.wikipedia.org/wiki/Salt_(cryptography)) and [hashing](https://www.wired.com/2016/06/hacker-lexicon-password-hashing/) for your user passwords. 

However, **the fact that you've implemented user management yourself hints at a bigger problem**. There are many common security mistakes like these, and unless you're a security specialist it's almost impossible to implement something by yourself that covers everything.

This is why it's important to build your websites on top of a common, well maintained platform or library. Platforms like Ruby on Rails, node.js or Django are used to run thousands of websites and are maintained by hundreds of contributors. This means that when it comes to security, they can provide the attention to detail that you can't. Put simply: if you store user information you should build your website on a popular and well-maintained platform.
 
**Do not implement user management yourself**. Use standard solutions, and use them as they're designed to be used.

## We only send users a plaintext password after a reset. The password is not stored in plaintext in the database.

That's great, but it's still not good practice:
 * Passwords shouldn't be sent over email. If you send a _reset link_ instead, you can disable it if it isn't used within an hour. 
 * Users that use your service only once might be tempted not to change the password, which means it can be recovered from their email by an attacker. You can force them to change it, but then you might as well send them a reset link.
 * This practice gives the user the impression that your passwords are stored in plaintext. It will make security-savvy users mistrust you.
 * Other users will become accustomed to receiving passwords over email. It's better if this practice is eliminated as much as possible, so that users are suspicious when they see theur passwor in an e-mail.

## Are there any other security issues like these I should watch out for?

Yes, many. As noted above, the main way to avoid security holes is to use standard solutions rather than your own implementations and to use them as they're designed to be used. However, it's good to be at least aware of the main pitfalls. Some common ones are:
* **[SQL injection](https://www.csoonline.com/article/3257429/application-security/what-is-sql-injection-this-oldie-but-goodie-can-make-your-web-applications-hurt.html)** This happens when a user can manipulate website forms to change the database queries. Most platforms take of  the construction of databse queries, so if you use them correctly, this won't happen. However, if you build database queries yourself you should be very careful about this.
* **[Cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)** There are many ways an attacker can sneak javascript onto your website, to manipulate it (for instance sending user information back to the attacker). 
* **[Direct object references]**(http://www.hackingarticles.in/beginner-guide-insecure-direct-object-references/) This happens when you pass information back to a server to the URL or POST parameters. Anybody can manipulate this information. If a website gives me acces to my data with the url ```site.com/user_data&id=00223```, I can't help but try the url  ```site.com/user_data&id=00222``` as well, to see if the website will give me access to somebody else's data. 

## I have more questions

Great! If you think it's a question that other people might have too, you can open [a github issue for this page](). If we agree, we'll add it to the page. If it's specific to your situation, you can ask a question on [security.stackexchange.com](security.stackexchange.com).

#  Information for users

## I received my password in cleartext. What should I do?
Firstly, make sure that the password you use for this service is not used anywhere important. Never re-use the password you use for email. Ideally, use a password manager.

Secondly, you can use the form below, to send them an email. If they get only one, they'll probably ignore it, but if they keep getting them, they'll start paying attention eventually.

## What else can I do to protect myself against sites like this.
The main security issue is the fact that users re-use passwords for different services. Of course, nobody can remember a separate password for each service they use. There are two simple solutions.

The first is to use a password manager. This securely stores a unique login for each service and you have to remember only one password: the one for your password manager. Good managers are ...

However, this does make logging in anywhere a bit more of a hassle. The second solution is to maintain a small set of passwords and to reuse passwords carefully. For instance:
One password for your email and never reuse that anywhere (access to your email is access to everything).
One password for sensitive services like banking, government services, PayPal, etc. Re-using passwords here is not ideal, but most of these services offer some extra protection so that is 
One password for everything else. 

This requires you to remember only three passwords, but it makes your data a lot more secure. If your memory is good you can extend the number of passwords. For instance, you can use a separate password for physical devices, or use a separate passwords for sites that you know are untrustworthy (like those that send you your password by email).

<h2 id="email">Send an email to the offending website</h2>

If you notice that somebody has sent you your password back, you can send them the following email. <span class="no-js">Just replace the values in square brackets.</span>

<div class="email-form"></div>

<div class="email-example"><pre>
subject: Your website ([address]) stores my password in cleartext

body: Dear Sir or Madam,

I am a user of your website ([address]). I recently noticed that you sent me my password by 
email. This means that my password is stored in unencrypted form in your database. This is
a very big problem that you need to address quickly.

You can read why this is such a big problem on the following (non-profit) website:

http://cleartxt.info

I hope you will read this information carefully and take steps to fix the problems with 
your website. 

With kind regards,
[your-name]
</pre></div>

<a class="email-link" href="mailto:?subject=Your%20website%20%28%5Baddress%5D%29%20stores%20my%20password%20in%20cleartext%0D%0A&body=Dear%20Sir%20or%20Madam%2C%0D%0A%0D%0AI%20am%20a%20user%20of%20your%20website%20%28%5Baddress%5D%29.%20I%20recently%20noticed%20that%20you%20sent%20me%20my%20password%20by%20%0D%0Aemail.%20This%20means%20that%20my%20password%20is%20stored%20in%20unencrypted%20form%20in%20your%20database.%20This%20is%0D%0Aa%20very%20big%20problem%20that%20you%20need%20to%20address%20quickly.%0D%0A%0D%0AYou%20can%20read%20why%20this%20is%20such%20a%20big%20problem%20on%20the%20following%20%28non-profit%29%20website%3A%0D%0A%0D%0Ahttp%3A%2F%2Fcleartxt.info%0D%0A%0D%0AI%20hope%20you%20will%20read%20this%20information%20carefully%20and%20take%20steps%20to%20fix%20the%20problems%20with%20%0D%0Ayour%20website.%20%0D%0A%0D%0AWith%20kind%20regards%2C%0D%0A%5Byour-name%5D">Open in my email client</a>

<footer>Hosted on GitHub Pages | Created by <a href="http://peterbloem.nl">Peter Bloem</a> | Questions or suggestions? <a href="https://github.com/pbloem/cleartxt/issues">Open a ticket.</a></footer>
