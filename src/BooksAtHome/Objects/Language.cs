﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.BooksAtHome
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Language.
    /// </summary>
    //  *** Start programmer edit section *** (Language CustomAttributes)

    //  *** End programmer edit section *** (Language CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("LanguageE", new string[] {
            "Name as \'Name\'"})]
    [View("LanguageL", new string[] {
            "Name as \'Name\'"})]
    public class Language : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        //  *** Start programmer edit section *** (Language CustomMembers)

        //  *** End programmer edit section *** (Language CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        //  *** Start programmer edit section *** (Language.Name CustomAttributes)

        //  *** End programmer edit section *** (Language.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                //  *** Start programmer edit section *** (Language.Name Get start)

                //  *** End programmer edit section *** (Language.Name Get start)
                string result = this.fName;
                //  *** Start programmer edit section *** (Language.Name Get end)

                //  *** End programmer edit section *** (Language.Name Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Language.Name Set start)

                //  *** End programmer edit section *** (Language.Name Set start)
                this.fName = value;
                //  *** Start programmer edit section *** (Language.Name Set end)

                //  *** End programmer edit section *** (Language.Name Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "LanguageE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View LanguageE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("LanguageE", typeof(IIS.BooksAtHome.Language));
                }
            }
            
            /// <summary>
            /// "LanguageL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View LanguageL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("LanguageL", typeof(IIS.BooksAtHome.Language));
                }
            }
        }
    }
}