using System;
    using System.Collections.Generic;
    using System.Text;
    using HP.ST.Fwk.RunTimeFWK.Utilities;
    using HP.ST.Fwk.RunTimeFWK.BindingFWK;
    
    namespace Script
    {
    
    public class TestEntities
    {
    public ISTRunTimeContext Context = null;
    public Dictionary<string, HP.ST.Fwk.RunTimeFWK.DataHandling.IDataSource> dataSourceNameToDataSource = new Dictionary<string, HP.ST.Fwk.RunTimeFWK.DataHandling.IDataSource>();
    
    protected HP.ST.Fwk.RunTimeFWK.DataHandling.IDataSource GetDataSource(string dataSourceName)
    {
    if(!dataSourceNameToDataSource.ContainsKey(dataSourceName))
    	throw new Exception(("A data source with the specified name does not exist."));
    return dataSourceNameToDataSource[dataSourceName];
    }
    public HP.ST.Ext.BasicActivities.DataFetchActivity DataFetchActivity52 = null;
    public HP.ST.Ext.BasicActivities.StartActivity StartActivity1 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.Loop<Loop2Input> Loop2 = null;
    public HP.ST.Ext.BasicActivities.DataExporterActivity DataExporterActivity54 = null;
    public HP.ST.Ext.BasicActivities.DataExporterCloseActivity DataExporterCloseActivity55 = null;
    public HP.ST.Ext.BasicActivities.EndActivity EndActivity3 = null;
    public HP.ST.Ext.BasicActivities.DataDisconnectActivity DataDisconnectActivity53 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.Sequence Sequence51 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest42 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElse<IfElse43Input> IfElse43 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest49 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElseBranch IfElseBranch44 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElseBranch IfElseBranch45 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest46 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest47 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest48 = null;
    public HP.ST.Ext.BasicActivities.ReportMessageActivity ReportMessageActivity50 = null;
    
    }
    
    }
    