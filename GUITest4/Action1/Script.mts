Device("Device").App("mobile banking").MobileButton("Annehmen").Tap
Device("Device").App("mobile banking").MobileObject("home_menu_button").Tap
Device("Device").App("mobile banking").MobileList("sliding_menu_list").Select 0
Device("Device").App("mobile banking").MobileLabel("online@ca-nextbank.ch").Check CheckPoint("online@ca-nextbank.ch")
