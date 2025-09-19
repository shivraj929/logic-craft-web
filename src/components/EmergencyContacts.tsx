import { Phone, Mail, User, Plus, Edit, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  email: string;
  address?: string;
  isPrimary: boolean;
  isAvailable: boolean;
}

const EmergencyContacts = () => {
  const contacts: EmergencyContact[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      relationship: "Parent/Guardian", 
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@email.com",
      address: "123 Main St, Springfield",
      isPrimary: true,
      isAvailable: true
    },
    {
      id: "2",
      name: "Emergency Services",
      relationship: "Emergency",
      phone: "911",
      email: "emergency@city.gov",
      isPrimary: false,
      isAvailable: true
    },
    {
      id: "3", 
      name: "Dr. Michael Chen",
      relationship: "Family Doctor",
      phone: "+1 (555) 987-6543",
      email: "mchen@medical.com",
      address: "456 Health Ave, Springfield",
      isPrimary: false,
      isAvailable: true
    },
    {
      id: "4",
      name: "School Administration",
      relationship: "School Contact",
      phone: "+1 (555) 555-0100",
      email: "admin@school.edu",
      address: "789 Education Blvd, Springfield",
      isPrimary: false,
      isAvailable: false
    }
  ];

  const getAvailabilityColor = (isAvailable: boolean) => {
    return isAvailable 
      ? "bg-success/10 text-success border-success/20"
      : "bg-muted text-muted-foreground border-muted";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Emergency Contacts</h2>
          <p className="text-muted-foreground">Manage your emergency contact information</p>
        </div>
        <Button className="bg-gradient-safety text-white shadow-safety">
          <Plus className="h-4 w-4 mr-2" />
          Add Contact
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((contact) => (
          <Card 
            key={contact.id} 
            className={`transition-all duration-300 hover:shadow-card ${
              contact.isPrimary ? 'ring-2 ring-primary/20 bg-primary/5' : ''
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <span>{contact.name}</span>
                    {contact.isPrimary && (
                      <Badge className="bg-primary text-primary-foreground">
                        Primary
                      </Badge>
                    )}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{contact.relationship}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getAvailabilityColor(contact.isAvailable)}>
                    {contact.isAvailable ? "Available" : "Unavailable"}
                  </Badge>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3">
              {/* Phone */}
              <div className="flex items-center space-x-3 text-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-lg">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{contact.phone}</p>
                  <p className="text-xs text-muted-foreground">Phone</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="h-8 px-3 bg-accent/5 border-accent/20 hover:bg-accent hover:text-accent-foreground"
                >
                  Call
                </Button>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 text-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-secondary/10 rounded-lg">
                  <Mail className="h-4 w-4 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{contact.email}</p>
                  <p className="text-xs text-muted-foreground">Email</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="h-8 px-3 bg-secondary/5 border-secondary/20 hover:bg-secondary hover:text-secondary-foreground"
                >
                  Email
                </Button>
              </div>

              {/* Address */}
              {contact.address && (
                <div className="flex items-center space-x-3 text-sm">
                  <div className="flex items-center justify-center w-8 h-8 bg-warning/10 rounded-lg">
                    <MapPin className="h-4 w-4 text-warning" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{contact.address}</p>
                    <p className="text-xs text-muted-foreground">Address</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="border-destructive/20 bg-destructive/5">
        <CardContent className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-destructive/10 rounded-lg">
                <Phone className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Emergency Dial</h3>
                <p className="text-sm text-muted-foreground">Quick access to emergency services</p>
              </div>
            </div>
            <Button 
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-emergency"
            >
              Call 911
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmergencyContacts;