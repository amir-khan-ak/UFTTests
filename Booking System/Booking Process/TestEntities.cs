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
    public HP.ST.Ext.BasicActivities.DataFetchActivity DataFetchActivity58 = null;
    public HP.ST.Ext.BasicActivities.DataFetchActivity DataFetchActivity55 = null;
    public HP.ST.Ext.BasicActivities.DataFetchActivity DataFetchActivity52 = null;
    public HP.ST.Ext.BasicActivities.DataFetchActivity DataFetchActivity49 = null;
    public HP.ST.Ext.BasicActivities.DataFetchActivity DataFetchActivity46 = null;
    public HP.ST.Ext.BasicActivities.DataFetchActivity DataFetchActivity43 = null;
    public HP.ST.Ext.BasicActivities.StartActivity StartActivity1 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.Loop<Loop2Input> Loop2 = null;
    public HP.ST.Ext.BasicActivities.DataExporterActivity DataExporterActivity45 = null;
    public HP.ST.Ext.BasicActivities.DataExporterActivity DataExporterActivity48 = null;
    public HP.ST.Ext.BasicActivities.DataExporterActivity DataExporterActivity51 = null;
    public HP.ST.Ext.BasicActivities.DataExporterActivity DataExporterActivity54 = null;
    public HP.ST.Ext.BasicActivities.DataExporterActivity DataExporterActivity57 = null;
    public HP.ST.Ext.BasicActivities.DataExporterActivity DataExporterActivity60 = null;
    public HP.ST.Ext.BasicActivities.DataExporterCloseActivity DataExporterCloseActivity61 = null;
    public HP.ST.Ext.BasicActivities.EndActivity EndActivity3 = null;
    public HP.ST.Ext.BasicActivities.DataDisconnectActivity DataDisconnectActivity44 = null;
    public HP.ST.Ext.BasicActivities.DataDisconnectActivity DataDisconnectActivity47 = null;
    public HP.ST.Ext.BasicActivities.DataDisconnectActivity DataDisconnectActivity50 = null;
    public HP.ST.Ext.BasicActivities.DataDisconnectActivity DataDisconnectActivity53 = null;
    public HP.ST.Ext.BasicActivities.DataDisconnectActivity DataDisconnectActivity56 = null;
    public HP.ST.Ext.BasicActivities.DataDisconnectActivity DataDisconnectActivity59 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.Sequence Sequence42 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest32 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElse<IfElse33Input> IfElse33 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElseBranch IfElseBranch34 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElseBranch IfElseBranch35 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest36 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest37 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest38 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest39 = null;
    public HP.ST.Ext.WebServicesActivities.StServiceCallActivity StServiceCallActivity40 = null;
    public HP.ST.Ext.WebServicesActivities.StServiceCallActivity StServiceCallActivity41 = null;
    
    }
    
    }
    