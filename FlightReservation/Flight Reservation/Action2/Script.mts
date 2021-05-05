WpfWindow("Micro Focus MyFlight Sample Ap").WpfComboBox("fromCity").Select "London"
WpfWindow("Micro Focus MyFlight Sample Ap").WpfComboBox("toCity").Select "Denver"
WpfWindow("Micro Focus MyFlight Sample Ap").WpfCalendar("datePicker").SetDate "20/02/2022"

userInput = Inputbox("Please enter Tickets between 1 - 10", "Ticket Entry")



WpfWindow("Micro Focus MyFlight Sample Ap").WpfComboBox("numOfTickets").Select userInput
WpfWindow("Micro Focus MyFlight Sample Ap").WpfComboBox("Class").Select "First"
WpfWindow("Micro Focus MyFlight Sample Ap").WpfButton("FIND FLIGHTS").Click
