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
    /// Tag.
    /// </summary>
    //  *** Start programmer edit section *** (Tag CustomAttributes)

    //  *** End programmer edit section *** (Tag CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("TagE", new string[] {
            "Name as \'Name\'",
            "TagType as \'Tag type\'",
            "TagType.Name as \'Name\'"}, Hidden=new string[] {
            "TagType.Name"})]
    [MasterViewDefineAttribute("TagE", "TagType", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    public class Tag : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private IIS.BooksAtHome.TagType fTagType;
        
        private IIS.BooksAtHome.Book fBook;
        
        //  *** Start programmer edit section *** (Tag CustomMembers)

        //  *** End programmer edit section *** (Tag CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        //  *** Start programmer edit section *** (Tag.Name CustomAttributes)

        //  *** End programmer edit section *** (Tag.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                //  *** Start programmer edit section *** (Tag.Name Get start)

                //  *** End programmer edit section *** (Tag.Name Get start)
                string result = this.fName;
                //  *** Start programmer edit section *** (Tag.Name Get end)

                //  *** End programmer edit section *** (Tag.Name Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Tag.Name Set start)

                //  *** End programmer edit section *** (Tag.Name Set start)
                this.fName = value;
                //  *** Start programmer edit section *** (Tag.Name Set end)

                //  *** End programmer edit section *** (Tag.Name Set end)
            }
        }
        
        /// <summary>
        /// Tag.
        /// </summary>
        //  *** Start programmer edit section *** (Tag.TagType CustomAttributes)

        //  *** End programmer edit section *** (Tag.TagType CustomAttributes)
        [NotNull()]
        public virtual IIS.BooksAtHome.TagType TagType
        {
            get
            {
                //  *** Start programmer edit section *** (Tag.TagType Get start)

                //  *** End programmer edit section *** (Tag.TagType Get start)
                IIS.BooksAtHome.TagType result = this.fTagType;
                //  *** Start programmer edit section *** (Tag.TagType Get end)

                //  *** End programmer edit section *** (Tag.TagType Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Tag.TagType Set start)

                //  *** End programmer edit section *** (Tag.TagType Set start)
                this.fTagType = value;
                //  *** Start programmer edit section *** (Tag.TagType Set end)

                //  *** End programmer edit section *** (Tag.TagType Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.BooksAtHome.Book.
        /// </summary>
        //  *** Start programmer edit section *** (Tag.Book CustomAttributes)

        //  *** End programmer edit section *** (Tag.Book CustomAttributes)
        [Agregator()]
        [NotNull()]
        public virtual IIS.BooksAtHome.Book Book
        {
            get
            {
                //  *** Start programmer edit section *** (Tag.Book Get start)

                //  *** End programmer edit section *** (Tag.Book Get start)
                IIS.BooksAtHome.Book result = this.fBook;
                //  *** Start programmer edit section *** (Tag.Book Get end)

                //  *** End programmer edit section *** (Tag.Book Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Tag.Book Set start)

                //  *** End programmer edit section *** (Tag.Book Set start)
                this.fBook = value;
                //  *** Start programmer edit section *** (Tag.Book Set end)

                //  *** End programmer edit section *** (Tag.Book Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "TagE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View TagE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("TagE", typeof(IIS.BooksAtHome.Tag));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Tag.
    /// </summary>
    //  *** Start programmer edit section *** (DetailArrayDetailArrayOfTag CustomAttributes)

    //  *** End programmer edit section *** (DetailArrayDetailArrayOfTag CustomAttributes)
    public class DetailArrayOfTag : ICSSoft.STORMNET.DetailArray
    {
        
        //  *** Start programmer edit section *** (IIS.BooksAtHome.DetailArrayOfTag members)

        //  *** End programmer edit section *** (IIS.BooksAtHome.DetailArrayOfTag members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Tag by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Tag.
        /// </summary>
        public DetailArrayOfTag(IIS.BooksAtHome.Book fBook) : 
                base(typeof(Tag), ((ICSSoft.STORMNET.DataObject)(fBook)))
        {
        }
        
        public IIS.BooksAtHome.Tag this[int index]
        {
            get
            {
                return ((IIS.BooksAtHome.Tag)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.BooksAtHome.Tag dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}