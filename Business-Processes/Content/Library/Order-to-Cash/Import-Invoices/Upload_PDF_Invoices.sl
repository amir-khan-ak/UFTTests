namespace: Order-to-Cash.Import-Invoices
flow:
  name: Upload_PDF_Invoices
  workflow:
    - Read_Email:
        do:
          Order-to-Cash.Import-Invoices.Read_Email: []
        navigate:
          - SUCCESS: Save_Invoice_Attachment
    - Save_Invoice_Attachment:
        do:
          Order-to-Cash.Import-Invoices.Save_Invoice_Attachment: []
        navigate:
          - SUCCESS: Login_to_SAP
    - Login_to_SAP:
        worker_group: RAS_Operator_Path
        do:
          Order-to-Cash.Import-Invoices.Login_to_SAP:
            - System: CRM
        navigate:
          - SUCCESS: Read_Invoice_File
          - WARNING: Recovery_from_Failure
          - FAILURE: Recovery_from_Failure
    - Recovery_from_Failure:
        do:
          Order-to-Cash.Import-Invoices.Recovery_from_Failure: []
        navigate:
          - SUCCESS: Read_Email
    - Create_Billing_Doc_from_PDF:
        do:
          Order-to-Cash.Import-Invoices.Create_Billing_Doc_from_PDF: []
        navigate:
          - SUCCESS: Read_Email
          - WARNING: Recovery_from_Failure
          - FAILURE: Recovery_from_Failure
    - Read_Invoice_File:
        do:
          Order-to-Cash.Import-Invoices.Read_Invoice_File: []
        navigate:
          - SUCCESS: Create_Billing_Doc_from_PDF
  results: []
extensions:
  graph:
    steps:
      Read_Email:
        x: 100
        'y': 250
      Save_Invoice_Attachment:
        x: 400
        'y': 250
      Login_to_SAP:
        x: 700
        'y': 250
        navigate:
          18909e13-cd19-7482-bbee-634716321de9:
            vertices:
              - x: 734
                'y': 387
              - x: 896.5
                'y': 390
              - x: 1050
                'y': 394
            targetId: Recovery_from_Failure
            port: FAILURE
          e5c956b4-891b-c424-7d0d-034611e32052:
            vertices:
              - x: 909
                'y': 281
              - x: 909
                'y': 349
              - x: 1050
                'y': 350
            targetId: Recovery_from_Failure
            port: WARNING
      Read_Invoice_File:
        x: 1000
        'y': 125
      Create_Billing_Doc_from_PDF:
        x: 1300
        'y': 250
        navigate:
          ffdffb47-5208-4d7a-c566-aad9a5c45ee6:
            vertices:
              - x: 1328
                'y': 102
              - x: 459
                'y': 98
            targetId: Read_Email
            port: SUCCESS
          1cfec2b4-c360-3818-a998-45b0aae91de2:
            vertices:
              - x: 1333
                'y': 491
              - x: 1246
                'y': 491
              - x: 1188
                'y': 490
            targetId: Recovery_from_Failure
            port: WARNING
          586100d7-f0f2-40d0-8f7e-34fbf310285a:
            vertices:
              - x: 1220
                'y': 276
              - x: 1219.3693742424318
                'y': 422.81755203788964
              - x: 1052
                'y': 416
            targetId: Recovery_from_Failure
            port: FAILURE
      Recovery_from_Failure:
        x: 1013
        'y': 450
        navigate:
          eff37f48-4f4a-369f-47c9-01873deb434b:
            vertices:
              - x: 138
                'y': 483
            targetId: Read_Email
            port: SUCCESS
