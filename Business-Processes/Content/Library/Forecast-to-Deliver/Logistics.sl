namespace: Forecast-to-Deliver
flow:
  name: Logistics
  workflow:
    - test:
        do:
          Forecast-to-Deliver.test: []
        navigate:
          - SUCCESS: test
  results: []
extensions:
  graph:
    steps:
      test:
        x: 174.01388549804688
        'y': 91.58332824707031
