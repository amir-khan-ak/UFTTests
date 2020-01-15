AIUtil.SetContext Device("Device")

AIUtil("hamburger_menu").Click
AIUtil("profile").Click
AIUtil("input", "USER NAME").Type "khanami"
AIUtil("input", "PASSWORD").Type "Khan4321!"

AIUtil("button", "LOGIN").Click

