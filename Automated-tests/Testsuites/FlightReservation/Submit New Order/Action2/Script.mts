WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "London"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "Paris"
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate "14/01/2021"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Economy"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "1"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click
