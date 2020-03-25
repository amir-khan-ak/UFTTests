WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select Parameter("FromCity")
'Comment
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select Parameter("ToCity")
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate Parameter("Date")
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select Parameter("Class")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click




