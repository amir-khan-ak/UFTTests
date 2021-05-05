WpfWindow("Micro Focus MyFlight Sample Ap").WpfComboBox("fromCity").Select "London"
WpfWindow("Micro Focus MyFlight Sample Ap").WpfComboBox("toCity").Select "Denver"
WpfWindow("Micro Focus MyFlight Sample Ap").WpfCalendar("datePicker").SetDate "20/02/2022"
WpfWindow("Micro Focus MyFlight Sample Ap").WpfComboBox("numOfTickets").Select "1"
WpfWindow("Micro Focus MyFlight Sample Ap").WpfComboBox("Class").Select "First"
WpfWindow("Micro Focus MyFlight Sample Ap").WpfButton("FIND FLIGHTS").Click
