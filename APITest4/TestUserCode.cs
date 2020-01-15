using System.Windows.Forms;
namespace Script
{
    using System;
    using System.Xml;
    using System.Xml.Schema;
    using HP.ST.Ext.BasicActivities;
    using HP.ST.Fwk.RunTimeFWK;
    using HP.ST.Fwk.RunTimeFWK.ActivityFWK;
    using HP.ST.Fwk.RunTimeFWK.Utilities;
    using HP.ST.Fwk.RunTimeFWK.CompositeActivities;
	using HP.ST.Ext.CustomDataProviders.Extensions;
	using HP.ST.Ext.CustomDataProviders.ExcelFileArguments;
    
    [Serializable()]
    public class TestUserCode : TestEntities
    {
    	
    	/// <summary>
    	/// Handler for the CodeActivity4 Activity’s ExecuteEvent event.
    	/// </summary>
    	/// <param name=\"sender\">The activity object that raised the ExecuteEvent event.</param>
    	/// <param name=\"args\">The event arguments passed to the activity.</param>
    	/// Use this.CodeActivity4 to access the CodeActivity4 Activity's context, including input and output properties.
    	public void CodeActivity4_OnExecuteEvent(object sender, STActivityBaseEventArgs args)
    	{
    		
    		
    		var ActivityArguments = args.Activity.StepId.ToString();
			this.CodeActivity4.Report("Overall report", ActivityArguments);
    		var ActivityArguments2 = args.Activity.StepId.ToString();
			this.CodeActivity4.Report("Overall report", ActivityArguments2);
    	}

    	/// <summary>
    	/// Handler for the StartActivity1 Activity’s BeforeExecution event.
    	/// </summary>
    	/// <param name=\"sender\">The activity object that raised the BeforeExecution event.</param>
    	/// <param name=\"args\">The event arguments passed to the activity.</param>
    	/// Use this.StartActivity1 to access the StartActivity1 Activity's context, including input and output properties.
    	public void StartActivity1_OnBeforeExecution(object sender, STActivityBaseEventArgs args)
    	{

    		
    	}
}

}
