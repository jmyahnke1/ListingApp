using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ListingApp.Infrastructure;
using ListingApp.Models;

namespace ListingApp.Controllers
{
    public class MessageHistoriesController : ApiController
    {
        private ListingAppDataContext db = new ListingAppDataContext();

        // GET: api/MessageHistories
        public IQueryable<MessageHistory> GetMessageHistories()
        {
            return db.MessageHistories;
        }

        // GET: api/MessageHistories/5
        [ResponseType(typeof(MessageHistory))]
        public IHttpActionResult GetMessageHistory(int id)
        {
            MessageHistory messageHistory = db.MessageHistories.Find(id);
            if (messageHistory == null)
            {
                return NotFound();
            }

            return Ok(messageHistory);
        }

        // PUT: api/MessageHistories/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutMessageHistory(int id, MessageHistory messageHistory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != messageHistory.MessageHistoryId)
            {
                return BadRequest();
            }

            db.Entry(messageHistory).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MessageHistoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/MessageHistories
        [ResponseType(typeof(MessageHistory))]
        public IHttpActionResult PostMessageHistory(MessageHistory messageHistory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.MessageHistories.Add(messageHistory);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = messageHistory.MessageHistoryId }, messageHistory);
        }

        // DELETE: api/MessageHistories/5
        [ResponseType(typeof(MessageHistory))]
        public IHttpActionResult DeleteMessageHistory(int id)
        {
            MessageHistory messageHistory = db.MessageHistories.Find(id);
            if (messageHistory == null)
            {
                return NotFound();
            }

            db.MessageHistories.Remove(messageHistory);
            db.SaveChanges();

            return Ok(messageHistory);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MessageHistoryExists(int id)
        {
            return db.MessageHistories.Count(e => e.MessageHistoryId == id) > 0;
        }
    }
}