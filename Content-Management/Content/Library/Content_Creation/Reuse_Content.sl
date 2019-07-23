namespace: Content_Creation
flow:
  name: Reuse_Content
  workflow:
    - Service_Status:
        do_external:
          911cc37a-0760-4880-be7d-9258b058946e:
            - host: localhost
            - service: RabbitMQ
        navigate:
          - failure: Service_Status
  results: []
extensions:
  graph:
    steps:
      Service_Status:
        x: 214
        'y': 40
