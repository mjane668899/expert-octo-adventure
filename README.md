# ![](app/assets/images/GA.png) SEI-38 Project 3: Viflix


This was developed as part of SEI 38 group Project, the goal was to build a web application from scratch, with knowledge of front and back-end web development to produce an awesome web application that can be used by friends, family or any of the other billions of people who use the Internet. The type of web application I chose to create was completely up to our group.

There were a few prerequisite conditions for the app, they are as follows:

- Models. Your app should have at least 3 models. Make sure they are associated correctly!
- Views. Use partials to DRY (Don’t Repeat Yourself) up your views.
- Handles invalid data. Forms in your application should validate data and handle incorrect inputs. Validate sign up information, verify valid email addresses and secure passwords.
- Use Gems Use a GEM that talks to an API to add functionality to your app.
- User Login. Make sure you have basic authentication and authorisation set up (if you need it).
- Heroku. Deploy your code to Heroku.



You can see the site [here](https://rental-marketplace2020.herokuapp.com/).

## Key Point
The codebase was built to minimise repeatable code.


## GA-BNB
---
#### Home

The home page incorporates the use of Faker API to list properties, with the dashboard at the top linking to all the other pages.

---
#### User Login

Users are able to login and change their password to meet their requirements.

----

#### Booking

Once users have logged in they are directed to the properties Page. The individual property  pages takes advantage of CRUD operations to allow a user to create a booking with the use of the 'flatpickr gem' & the Stripe API to pay for their stay.

Once on the dashboard users have access to their reservations to edit/delete a booking.  

---

##### Other

Working in a group really helped us understand the importance of git commits and working on separate branches. Learning to commit early and often to avoid JSON files clashing and crashing the repository. Overall it was a great learning experience.

---

##### Future-addons

- GoogleMaps API (Very close to successfully integrating)
- Cloudinary
- Upgrading to React
- Reviews

---

## Tools
**Languages:** Javascript

**Frameworks:** React(Custom Hooks, Context, Portals)

**Server:** Firebase

**Libraries:** jQuery
