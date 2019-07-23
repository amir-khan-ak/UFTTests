namespace: E-Commerce
operation:
  name: Login
  sequential_action:
    gav: 'com.microfocus.seq:E-Commerce.Login:1.0.0'
    steps:
      - step:
          id: '2'
          object_path: 'Browser("Welcome: Mercury Tours")'
          action: Navigate
          default_args: '"http://demoaut.com/"'
          snapshot: ".\\Snapshots\\ssf1.png"
          highlight_id: '67778'
      - step:
          id: '3'
          object_path: 'Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName")'
          action: Set
          default_args: ''
          snapshot: ".\\Snapshots\\ssf2.html"
          highlight_id: '10000000'
          args: '"Amir"'
      - step:
          id: '4'
          object_path: 'Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password")'
          action: SetSecure
          default_args: '"amir"'
          snapshot: ".\\Snapshots\\ssf3.html"
          highlight_id: '10000000'
      - step:
          id: '5'
          object_path: 'Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In")'
          action: Click
          default_args: '32,8'
          snapshot: ".\\Snapshots\\ssf4.html"
          highlight_id: '10000000'
  outputs:
    - return_result: '${return_result}'
    - error_message: '${error_message}'
  results:
    - SUCCESS
    - WARNING
    - FAILURE
