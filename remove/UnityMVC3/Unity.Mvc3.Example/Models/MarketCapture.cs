using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using RLMarketCapture;
//using MyResources;


namespace Unity.Mvc3.Example.Models
{
    public class MarketCapture : IMarketCapture
    {
        public string SiteNum { get; set;}
        public string Prefix { get; set; }
        public string Firstname { get; set; }
        [Required(ErrorMessage="*")]
        public string Lastname { get; set; }
        [Required(ErrorMessage="*")]
        [DataType(DataType.EmailAddress, ErrorMessage="*")]
        public string Emailaddress { get; set; }
        [DataType(DataType.PhoneNumber)]
        public string Phonenumber { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public bool? Registernews { get; set; }
        public bool? RLcustomer { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public string RLstore { get; set; }
        public string Heardaboutus { get; set; }
        public string Thanks { get; set; }

        public rlworldwideEntities1 context { get; set; }
        
        public MarketCapture()
        {
            context = new rlworldwideEntities1();           
        }

        public bool Save()
        {
            bool success = true;
            try
            {
                context.usp_SaveMarketingCapture(this.SiteNum, this.Prefix, this.Firstname, this.Lastname, this.Emailaddress, this.Phonenumber, this.Address1, this.Address2, this.City, this.State, this.Country, this.Registernews, this.RLcustomer, this.Subject, this.Message, this.RLstore, this.Heardaboutus);
                context.SaveChanges();
            }
            catch
            {
                success = false;
            }

            return success;
        }

        
    }
}