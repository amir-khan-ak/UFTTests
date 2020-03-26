WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Denver"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "Frankfurt"
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate "20/04/2020"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Economy"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "1"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click


