Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set DataTable("User", dtGlobalSheet) @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").SetSecure "5d36d0b99907b6ef3d225c214208" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click 42,15 @@ script infofile_;_ZIP::ssf3.xml_;_


Reporter.ReportEvent micInfo, "Information", "Information"

