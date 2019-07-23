namespace: Order-to-Cash.Import-Invoices
operation:
  name: Create_Billing_Doc_from_PDF
  outputs:
  - return_result: ${return_result}
  - error_message: ${error_message}
  sequential_action:
    gav: com.microfocus.seq:Order-to-Cash.Import-Invoices.Create_Billing_Doc_from_PDF:1.0.0
    steps:
    - step:
        id: '1'
        object_path: Browser("Document Management in").Page("Document Management in")
        action: Sync
    - step:
        id: '2'
        object_path: Browser("Document Management in")
        action: Navigate
        default_args: '"https://answers.sap.com/questions/1374198/document-management-in-sap.html"'
        snapshot: .\Snapshots\ssf1.png
        highlight_id: '67778'
  results:
  - SUCCESS
  - WARNING
  - FAILURE
