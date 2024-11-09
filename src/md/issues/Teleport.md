### Partial Teleport

![Partial Teleport](partialteleport.png)

Here is an interesting issue. I confirmed that he has the badges on his Eth Wallet and only the Diamond is in his Pond0x account. I hope this one gets addressed.

I am not sure I have a solution for it. My suggestion is to make sure the badges that show up on this page match up with what you are expecting before clicking the send button.

### X Connection Failures

Connecting to X is a part of the Check In process. I have heard some reports of people claiming to check in with X and then find that their account is not connected. 

I am still digging into this one. It seems like there are a few variations of it.

E.g.
![teleportfailure](teleportfailure.png)

I personally experience this one. My manifest shows `"hasTwitter": false` but my PFP loads, checkin seems fully completed, and Pond0x is a connected app on X.

### ~~X Badge Not Showing~~ Fixed 

~~The conditional on the passport seems to be backwards. `"hasTwitter": false` makes it show up and `"hasTwitter": false` makes it hide.  Either the payload is backwards or the UI is backwards.~~

### Disconnecting X Cannot Reconnect

I am told that disconnecting the X account makes it so you cannot reconnect.