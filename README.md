<div><a class="action-link" href="#send-email">Send someone here</a></div>
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
<aside>For more examples, see <a href="http://plaintextoffenders.com/">plaintextoffenders.com</a>.</aside>

The user is trying to tell you that this is a very serious security problem, and you should fix it.

## What's the problem?

In a secure website, or any other application managing user information, **the operator 
should not be able to see the user's passwords**. If you can email me my password, that 
means you can see it too. 

You can obscure the passwords by [hashing](https://www.wired.com/2016/06/hacker-lexicon-password-hashing/) them. 
This encrypts the passwords in your database, but still allows you to check if a user knows 
their password.

This practice ensures that the password information stays safe, even in the following events:
 * Your site is hacked and your user's information is stolen.
 * An administrator you hired behaves unethically and steals user information.

It also stops you from sending passwords over email. Email is not encrypted by 
default, and anybody relaying the email data between the sender and the receiver can read it.

## My website is not that important. There are no payments and security is not crucial.

That makes your site a prime target for attack. **Users reuse passwords.** If I get access to your database:

 1. I will get an email address and a password for each user. 
 2. If any of them use the same password for their email as for your site, I can access their email.
 3. With access to their email I can reset the password for any other service they're subscribed to.

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
 * Your system administrator and your developers have access to this data. They could read the emails of any users that reuse their email password for your site. I'm sure they're all very nice people, but it only takes one moment of weakness from one employee.
 * A careless developer might copy the database to their laptop for testing purposes, and get hacked themselves. 
 * Your backups might be compromised, even if the main site is safe.

## How should I fix this?

The most direct fix is to implement [salting](https://en.wikipedia.org/wiki/Salt_(cryptography)) and [hashing](https://www.wired.com/2016/06/hacker-lexicon-password-hashing/) for your user passwords. 

However, **the fact that you've implemented user management _yourself_ hints at a bigger 
problem**. There are many common security mistakes like these, and unless you're a security 
specialist it's almost impossible to cover everything.

This is why it's important to **build your websites on top of a well maintained platform 
or library**. Platforms like Ruby on Rails, Node.js or Django are used to run thousands 
of websites and are maintained by hundreds of contributors. This means that when it comes 
to security, they can provide the attention to detail that you can't. Put simply: if you 
store user information you should build your website on a popular and well-maintained
 platform.
 
**Do not implement user management yourself**. Use standard solutions, and use them as 
they're designed to be used.

## We only send users a plaintext password after a reset. The password is not stored in plaintext in the database.

That's great, but it's still not good practice. You should send send a _reset link_ instead:

 * A link is easier to disable if it isn't used right away.
  Users that use your service only once might be tempted not to change the password, which 
 means it can be recovered from their email by an attacker. 
 * Users should be distrustful when passwords are sent to them over email. You are eroding 
 that security-consciousness.
 * You may know that the passwords are stored properly, but the user doesn't. A reset link 
  makes it easier for users to trust your security practices.

## I have more questions.

Great! <a href="other-questions">This page has some more answers for you</a>.

If your question is not on there, and you think it's a question that other people might have
too, you can open [a github issue for this page](https://github.com/pbloem/cleartxt/issues). 
If we agree, we'll add it to the page. If it's specific to your situation, you can ask a 
question on [security.stackexchange.com](security.stackexchange.com).

#  Information for users

## I received my password in cleartext. What should I do?

First, make sure that the password you use for this service is not used anywhere 
important. Never re-use the password you use for email. Ideally, use a password manager. If 
possible, remove any personal information and ditch the service.

Second, you can use the form below, to send them an email. If they get only one, they'll
 probably ignore it, but if they keep getting them, they'll start paying attention eventually.

## What else can I do to protect myself against sites like this?

The main security issue is the fact that users reuse passwords for different services. Of
 course, nobody can remember a separate password for each service they use. There are two 
 simple solutions.

The first is to use a password manager. This securely stores a unique login for each service
 and you have to remember only one password: the one for your password manager. Some OSs 
 come with a password manages (like keychain on macOS). [This article](https://www.tomsguide.com/us/best-password-managers,review-3785.html) 
 gives some other options.

However, this does make logging in anywhere a bit more of a hassle. The second solution is
 to maintain a small set of passwords and to reuse passwords carefully. For instance:
 
 * One password for your email, never reused anywhere (access to your email is access to everything).
 * One password for sensitive services like banking, government services, PayPal, etc. 
 * One password for everything else. 

This requires you to remember only three passwords, but it makes your data a lot more secure. 
If your memory is good you can extend the number of passwords. For instance, you can use a
 separate password for physical devices, or use a separate passwords for sites that you know
  are untrustworthy (like those that send you back your own password).

<h2 id="send-email">Send an email to an offending website</h2>

If you notice that somebody has sent you your password back, you can send them the following
 email. <span class="no-js">Just replace the values in square brackets.</span>

<div class="email-form"></div>

<div id="email-example" class="email-example">
<pre class="to">
to: [their-address]
</pre>
<pre class="subject">
subject: Your website ([website]) stores my password in cleartext
</pre>
<pre class="body">
body: Dear Sir or Madam,

I am a user of your website ([website]). I recently noticed that you sent me my password by email. This means that my password is stored in unencrypted form in your database. This is a serious problem that you need to address quickly.

You can read why on the following (non-profit) website:

http://cleartxt.info

I hope you will read this information carefully and take steps to fix the problems with our website. If you can't, please ensure that some who can is made aware of the problem.

With kind regards,
[your-name]
</pre>

<a class="email-link" href="mailto:?subject=Your%20website%20%28%5Baddress%5D%29%20stores%20my%20password%20in%20cleartext%0D%0A&body=Dear%20Sir%20or%20Madam%2C%0D%0A%0D%0AI%20am%20a%20user%20of%20your%20website%20%28%5Baddress%5D%29.%20I%20recently%20noticed%20that%20you%20sent%20me%20my%20password%20by%20%0D%0Aemail.%20This%20means%20that%20my%20password%20is%20stored%20in%20unencrypted%20form%20in%20your%20database.%20This%20is%0D%0Aa%20very%20big%20problem%20that%20you%20need%20to%20address%20quickly.%0D%0A%0D%0AYou%20can%20read%20why%20this%20is%20such%20a%20big%20problem%20on%20the%20following%20%28non-profit%29%20website%3A%0D%0A%0D%0Ahttp%3A%2F%2Fcleartxt.info%0D%0A%0D%0AI%20hope%20you%20will%20read%20this%20information%20carefully%20and%20take%20steps%20to%20fix%20the%20problems%20with%20%0D%0Ayour%20website.%20%0D%0A%0D%0AWith%20kind%20regards%2C%0D%0A%5Byour-name%5D">Open in email client</a>
</div>


