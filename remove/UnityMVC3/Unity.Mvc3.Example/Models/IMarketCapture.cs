using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Unity.Mvc3.Example.Models
{
    public interface IMarketCapture
    {
        string SiteNum { get; set;}
        string Prefix { get; set; }
        string Firstname { get; set; }
      
        string Lastname { get; set; }
        
       
        string Emailaddress { get; set; }
        
        string Phonenumber { get; set; }
        string Address1 { get; set; }
        string Address2 { get; set; }
        string City { get; set; }
        string State { get; set; }
        string Country { get; set; }
        bool? Registernews { get; set; }
        bool? RLcustomer { get; set; }
        string Subject { get; set; }
        string Message { get; set; }
        string RLstore { get; set; }
        string Heardaboutus { get; set; }
        string Thanks { get; set; }

        rlworldwideEntities1 context { get; set; }

        bool Save();
        
    }
}
