namespace: E-Commerce
flow:
  name: Login_flow
  workflow:
    - Login:
        do:
          E-Commerce.Login:
            - User: Amir
            - Password: mercury
        publish:
          - return_result
          - error_message
        navigate:
          - SUCCESS: SUCCESS
          - WARNING: SUCCESS
          - FAILURE: on_failure
  outputs:
    - return_result
    - error_message
  results:
    - SUCCESS
    - FAILURE
extensions:
  graph:
    steps:
      Login:
        x: 100
        'y': 150
        navigate:
          3405c67a-0448-4b51-0389-6dd5be876e9e:
            targetId: a7626c1b-e84b-5d46-dcb4-797aa49fa82a
            port: SUCCESS
          81d560dc-9036-4b44-c798-aee307d05fd0:
            targetId: a7626c1b-e84b-5d46-dcb4-797aa49fa82a
            port: WARNING
    results:
      SUCCESS:
        a7626c1b-e84b-5d46-dcb4-797aa49fa82a:
          x: 476
          'y': 143
