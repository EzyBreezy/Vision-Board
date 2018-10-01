A page to save for goals

similar to a visual board.
try to use a mint like system that allows you to link a bank account if possible
otherwise input info

this info would be private to the user that signs in.

Upload a picture and store that picture towards a financial goal.

like... Wedding, car, paying off tuition loan..
maybe a visual refrence to goal

#A personal financial planning

Home Page (sign in page with a call to action statment to incurage account creation)
    +User ([String] [One])
        - [Username] [String]
        - [Password] [String]
        - [Sign in Button] [Button]
                #Personal page [One]
                    *Goals [One or Many]
                        ^Goal title [String]
                        ^Comment Goal [String]
                        ^Images Refrence to Goal [Link]
                        ^Cost of Goal [Number]
                        ^Percent To Goal
                        ^Graphical Overlay of Goal

One Universal Home Page [Main Index/Landing Page]
Sign In Page forum [One Forum]
Personal Page [One Personal Page]
Goals [Many Goals]
