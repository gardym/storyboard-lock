# Because concurrency is for fools and horses.

## Clientele

    $ cp hooks/pre-commit my/project/.git/hooks
    (edit my/project/.git/hooks/pre-commit and set your ENDPOINT)

When you want to edit the storyboard hit:

    $ curl http://my.project.com.net/lock/Me

When you're done unlock it:

    $ curl http://my.project.com.net/unlock

No, there's nothing special about the locking. Anyone can unlock it.
This isn't about security, it's about trying to reduce your pain.
If you want that pain back, by all means, be my guest!
