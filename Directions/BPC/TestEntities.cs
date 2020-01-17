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
    public HP.ST.Ext.BasicActivities.StartActivity StartActivity1 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.Loop<Loop2Input> Loop2 = null;
    public HP.ST.Ext.BasicActivities.EndActivity EndActivity3 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.Sequence Sequence14 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest4 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElse<IfElse5Input> IfElse5 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElseBranch IfElseBranch6 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElseBranch IfElseBranch7 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest8 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest11 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest12 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest13 = null;
    public HP.ST.Ext.UFTActivity.QtpTestActivity CallQTPTest9 = null;
    
    }
    
    }
    