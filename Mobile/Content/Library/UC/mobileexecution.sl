namespace: UC
operation:
  name: mobileexecution
  outputs:
  - return_result: ${return_result}
  - error_message: ${error_message}
  sequential_action:
    gav: com.microfocus.seq:UC.mobileexecution:1.0.0
    steps:
    - step:
        id: '1'
        object_path: SystemUtil
        action: Run
        default_args: '"C:\Users\khanamir\AppData\Roaming\Microsoft\Internet Explorer\Quick
          Launch\User Pinned\TaskBar\Google Chrome.lnk","","",""'
    - step:
        id: '2'
        object_path: Browser("Browser")
        action: Navigate
        default_args: '"http://demoaut.com/"'
        snapshot: .\Snapshots\ssf1.png
        highlight_id: '263174'
    - step:
        id: '3'
        object_path: 'Browser("Browser").Page("Welcome: Mercury Tours").Link("SIGN-ON")'
        action: Click
        snapshot: .\Snapshots\ssf2.html
        highlight_id: '10000000'
  results:
  - SUCCESS
  - WARNING
  - FAILURE
