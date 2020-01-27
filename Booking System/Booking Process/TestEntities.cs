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
    public HP.ST.Ext.BasicActivities.DataFetchActivity DataFetchActivity23 = null;
    public HP.ST.Ext.BasicActivities.StartActivity StartActivity1 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.Loop<Loop2Input> Loop2 = null;
    public HP.ST.Ext.BasicActivities.DataExporterActivity DataExporterActivity25 = null;
    public HP.ST.Ext.BasicActivities.DataExporterCloseActivity DataExporterCloseActivity26 = null;
    public HP.ST.Ext.BasicActivities.EndActivity EndActivity3 = null;
    public HP.ST.Ext.BasicActivities.DataDisconnectActivity DataDisconnectActivity24 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.Sequence Sequence22 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest13 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElse<IfElse14Input> IfElse14 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElseBranch IfElseBranch15 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElseBranch IfElseBranch16 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest19 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest18 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest20 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest21 = null;
    public HP.ST.Ext.BasicActivities.ReportMessageActivity ReportMessageActivity17 = null;
    
    }
    
    }
    